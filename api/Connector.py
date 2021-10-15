import pymysql
import hashlib
import base64
from PIL import Image
import io

class Connection:
    def __init__(self):
        self.conn = None
        conn = pymysql.connect(user="root", password="root", host="localhost",port=3306, database="stylezone", autocommit=1)
        self.cur = conn.cursor()

    def exec(self, *args):
        try:
            self.cur.execute(self.query, *args)
            return 1
        except Exception as e:
            print(e)
            return 0

    def getUserInfo(self, data):
        self.query = 'SELECT * FROM customers WHERE username= %s'
        flag = self.exec(data['username'])
        val = self.cur.fetchone()
        if flag == 1 and val is not None:
            info={"firstname":val[1], "lastname":val[2], "contact":val[3], "email":val[4], "gender":val[5], "username":val[6], "password":val[7]}
            return info
        else:
            return flag

    def createUser(self, data):
        self.query = 'INSERT INTO customers (`firstname`, `lastname`, `contact`, `email`, `gender`, `username`, `password`) VALUES (%s, %s, %s, %s, %s, %s, %s)'
        pw = hashlib.md5(str(data['password']).encode())
        converted = pw.hexdigest()
        flag = self.exec((data['fname'],data['lname'],data['contact'],data['email'],data['gender'],data['username'],converted))
        return flag

    def verifyUser(self, data):
        self.query = 'SELECT count(*) from customers where username = %s'
        flag = self.exec(data['username'])
        if self.cur.fetchone()[0] == 1 and flag == 1:
            self.query = 'SELECT password FROM customers where username = %s'
            flag = self.exec(data['username'])
            pw = hashlib.md5(str(data['password']).encode())
            converted = pw.hexdigest()
            if self.cur.fetchone()[0] == converted and flag == 1:
                val = data['username']
                return val
        return 0

    def update(self,data):
        if data['fname']!='':
            self.query = 'UPDATE customers SET firstname=%s WHERE username=%s'
            self.exec((data['fname'],data['username']))
        if data['lname']!='':
            self.query = 'UPDATE customers SET lastname=%s WHERE username=%s'
            self.exec((data['lname'],data['username']))
        if data['email']!='':
            self.query = 'UPDATE customers SET email=%s WHERE username=%s'
            self.exec((data['email'],data['username']))
        if data['contact']!='':
            self.query = 'UPDATE customers SET contact=%s WHERE username=%s'
            self.exec((data['contact'],data['username']))
        if data['newusername']!='':
            self.query = 'UPDATE customers SET username=%s WHERE username=%s'
            self.exec((data['newusername'],data['username']))
        return 1

    def resetPassword(self,data):
        self.query = 'SELECT * FROM customers WHERE email = %s'
        flag = self.exec(data['email'])
        val=self.cur.fetchone()[7]
        if val is not None and flag == 1:
            pw = hashlib.md5(str(data['password']).encode())
            converted = pw.hexdigest()
            if val!=converted:
                self.query = 'UPDATE customers SET password= %s WHERE email=%s'
                flag = self.exec((converted,data['email']))
                if flag == 1:
                    return 1
            else:
                return 2
        return 0

    def Trending(self,data):
        self.query='SELECT gender FROM customers WHERE username=%s'
        self.exec(data['uname'])
        val=self.cur.fetchone()
        li=[]
        if val[0]=="Female":
            gender="Women"
        else:
            gender="Men"
        def write_file(data, filename):
            with open(filename, 'wb') as file:
                file.write(data)
        self.query='SELECT * FROM products WHERE filters LIKE %s AND sales>0 ORDER BY sales DESC'
        x=gender+'%'
        flag=self.exec(x)
        val1=self.cur.fetchall()
        if flag==1:
            for row in val1:
                self.query='SELECT * FROM images WHERE name=%s'
                flag2=self.exec(row[0])
                val2=self.cur.fetchall()
                if flag2==1 and val2 is not None:
                    write_file(val2[0][1],"tprodimg.png")
                    img = Image.open("tprodimg.png")
                    rgb_im = img.convert('RGB')
                    data = io.BytesIO()
                    rgb_im.save(data, "JPEG")
                    photo = base64.b64encode(data.getvalue())
                    photo1=photo.decode('utf-8')
                    if len(val2)>1:
                        write_file(val2[1][1],"tprodimg.png")
                        img = Image.open("tprodimg.png")
                        rgb_im = img.convert('RGB')
                        data = io.BytesIO()
                        rgb_im.save(data, "JPEG")
                        photo = base64.b64encode(data.getvalue())
                        photo2=photo.decode('utf-8')
                    else:
                        photo2=''
                    prods={"name":row[0],"price":row[1],"quantity":row[2],"filters":row[3],"details":row[4],"image1":photo1,"image2":photo2}
                    if(len(li)<12):
                        li.append(prods)
                    else:
                        break
            return li
        return 0

    def Products(self):
        def write_file(data, filename):
            with open(filename, 'wb') as file:
                file.write(data)
        self.query='SELECT * FROM products'
        li=[]
        flag=self.exec()
        val1=self.cur.fetchall()
        if flag==1:
            for row in val1:
                self.query='SELECT * FROM images WHERE name=%s'
                flag2=self.exec(row[0])
                val2=self.cur.fetchall()
                if flag2==1 and val2 is not None:
                    write_file(val2[0][1],"prodimg.png")
                    img = Image.open("prodimg.png")
                    rgb_im = img.convert('RGB')
                    data = io.BytesIO()
                    rgb_im.save(data, "JPEG")
                    photo = base64.b64encode(data.getvalue())
                    photo1=photo.decode('utf-8')
                    if len(val2)>1:
                        write_file(val2[1][1],"prodimg.png")
                        img = Image.open("prodimg.png")
                        rgb_im = img.convert('RGB')
                        data = io.BytesIO()
                        rgb_im.save(data, "JPEG")
                        photo = base64.b64encode(data.getvalue())
                        photo2=photo.decode('utf-8')
                    else:
                        photo2=''
                    prods={"name":row[0],"price":row[1],"quantity":row[2],"filters":row[3],"details":row[4],"image1":photo1,"image2":photo2}
                    li.append(prods)
            return li
        return 0

    def addProduct(self, data):
        def convertToBinaryData(filename):
            with open(filename, 'rb') as file:
                binaryData = file.read()
            return binaryData
        self.query = 'INSERT INTO `products`(`name`, `price`, `quantity`, `filters`, `details`) VALUES (%s, %s, %s, %s, %s)'
        self.exec((data['prodname'],data['prodprice'],data['prodqty'],data['prodfilter'],data['proddet']))
        self.query = 'INSERT INTO images(name, image) VALUES (%s,%s)'
        pic1 = convertToBinaryData(data['pic1'])
        flag=self.exec((data['prodname'],pic1))
        if data['pic2']!='':
            pic2 = convertToBinaryData(data['pic2'])
            self.query = 'INSERT INTO images(name, image) VALUES (%s,%s)'
            flag=self.exec((data['prodname'],pic2))
        return flag

    def updateProd(self,data):
        if data['pdet']!='':
            self.query = 'UPDATE products SET details=%s WHERE name=%s'
            self.exec((data['pdet'],data['pname']))
        if data['pfilters']!='':
            self.query = 'UPDATE products SET filters=%s WHERE name=%s'
            self.exec((data['pfilters'],data['pname']))
        if data['pprice']!='':
            self.query = 'UPDATE products SET price=%s WHERE name=%s'
            self.exec((data['pprice'],data['pname']))
        if data['pqty']!='':
            self.query = 'UPDATE products SET quantity=%s WHERE name=%s'
            self.exec((data['pqty'],data['pname']))
        return 1

    def deleteProd(self,data):
        if data['pname']!='':
            self.query= 'DELETE FROM products WHERE name=%s'
            flag=self.exec((data['pname']))
            self.query= 'DELETE FROM images WHERE name=%s'
            flag=self.exec((data['pname']))
        return flag

    def Customers(self):
        self.query='SELECT * FROM customers'
        li=[]
        flag=self.exec()
        val=self.cur.fetchall()
        if flag==1:
            for row in val:
                cust={"id":row[0],"firstname":row[1],"lastname":row[2],"contact":row[3],"email":row[4]}
                li.append(cust)
            return li
        return 0

    def OrderDetails(self):
        self.query='SELECT * FROM orders'
        li=[]
        flag=self.exec()
        val=self.cur.fetchall()
        if flag==1:
            for row in val:
                prod={"order_id":row[0],"username":row[1],"product":row[2],"size":row[3],"quantity":row[4],
                "price":row[5],"date":row[6],"address":row[7],"pincode":row[8],"status":row[9]}
                li.append(prod)
            li.reverse()
            return li
        return 0

    def getmyorders(self,data):
        li=[]
        self.query='SELECT * FROM orders WHERE username=%s'
        self.exec(data['uname'])
        val=self.cur.fetchall()
        li2=[]
        id=1
        for row in val:
            if(id!=row[0]):
                id=row[0]
                if(li2!=[]):
                    li.append(li2)
                li2=[]
            li2.append({"o_id":row[0],"pname":row[2],"size":row[3],"quantity":row[4],"price":row[5],"date":row[6],"status":row[9]})
        li.append(li2)
        li.reverse()
        return li

    def checkOrder(self,data):
        self.query='SELECT * FROM orders WHERE username=%s AND order_id=%s'
        self.exec((data['uname'],data['oid']))
        vals=self.cur.fetchall()
        li=[]
        for row in vals:
            li.append({"o_id":row[0],"pname":row[2],"size":row[3],"quantity":row[4],"price":row[5],"date":row[6],"status":row[9]})
        if li!=[]:
            return li
        else:
            return 0

    def getcart(self,data):
        def write_file(data, filename):
            with open(filename, 'wb') as file:
                file.write(data)
        li=[]
        self.query='SELECT * FROM cart WHERE username=%s'
        self.exec(data['uname'])
        val=self.cur.fetchall()
        for row in val:
            self.query='SELECT * FROM images WHERE name=%s'
            self.exec(row[1])
            val2=self.cur.fetchone()
            write_file(val2[1],"cartimg.png")
            img = Image.open("cartimg.png")
            rgb_im = img.convert('RGB')
            data = io.BytesIO()
            rgb_im.save(data, "JPEG")
            photo = base64.b64encode(data.getvalue())
            photo1=photo.decode('utf-8')
            li.append({"name":row[1],"size":row[2],"quantity":row[3],"price":row[4],"photo":photo1})
        return li

    def addCart(self,data):
        self.query='SELECT * FROM cart WHERE product=%s AND size=%s AND username=%s'
        self.exec((data['product'],data['size'],data['username']))
        val=self.cur.fetchone()
        if(val is not None):
            self.query='UPDATE cart SET quantity=%s WHERE product=%s AND username=%s'
            flag=self.exec((val[3]+int(data['quantity']),data['product'],data['username']))
        else:
            self.query='INSERT INTO cart SET username=%s,product=%s,size=%s,quantity=%s,price=%s'
            flag=self.exec((data['username'],data['product'],data['size'],data['quantity'],data['price']))
        return flag

    def deletecart(self,data):
        self.query='DELETE FROM cart WHERE product=%s AND username=%s'
        flag=self.exec((data['product'],data['uname']))
        return flag

    def updateQty(self,data):
        self.query='UPDATE cart SET quantity=%s WHERE product=%s AND username=%s'
        flag=self.exec((data['quantity'],data['product'],data['username']))
        return flag
    
    def order(self,data):
        orderid=1000
        self.query='SELECT * FROM orders ORDER BY order_id DESC'
        self.exec()
        id=self.cur.fetchone()
        if(id is not None):
            orderid=id[0]+1
        self.query='SELECT * FROM cart WHERE username=%s'
        self.exec(data['username'])
        rows=self.cur.fetchall()
        flag=0
        for val in rows:
            self.query='INSERT INTO orders (`order_id`, `username`, `product`, `size`, `quantity`, `price`, `address`, `pincode`) VALUES(%s,%s,%s,%s,%s,%s,%s,%s)'
            flag=self.exec((orderid,data['username'],val[1],val[2],val[3],val[4],data['address'],data['pincode']))
            self.query='UPDATE products SET quantity=quantity-%s, sales=sales+%s WHERE name=%s'
            flag=self.exec((val[3],val[3],val[1]))
        self.query='DELETE FROM cart WHERE username=%s'
        self.exec(data['username'])
        return flag

    def topProducts(self):
        self.query='SELECT name,sales FROM products ORDER BY sales DESC'
        self.exec()
        values=self.cur.fetchall()
        li=[]
        for val in values:
            if len(li)<5:
                li.append(val)
            else:
                break
        return li

    def Pie(self):
        self.query='SELECT name,filters,sales FROM products'
        self.exec()
        values=self.cur.fetchall()
        a=b=c=d=e=f=g=h=i=0
        for val in values:
            if val[1].find('Women')>-1 and val[1].find('Clothing')>-1:
                a+=val[2]
            elif val[1].find('Women')>-1 and val[1].find('Accessories')>-1:
                b+=val[2]
            elif val[1].find('Women')>-1 and val[1].find('Footwear')>-1:
                c+=val[2]
            elif val[1].find('Men')>-1 and val[1].find('Clothing')>-1:
                d+=val[2]
            elif val[1].find('Men')>-1 and val[1].find('Accessories')>-1:
                e+=val[2]
            elif val[1].find('Men')>-1 and val[1].find('Footwear')>-1:
                f+=val[2]
            elif val[1].find('Kids')>-1 and val[1].find('Clothing')>-1:
                g+=val[2]
            elif val[1].find('Kids')>-1 and val[1].find('Accessories')>-1:
                h+=val[2]
            elif val[1].find('Kids')>-1 and val[1].find('Footwear')>-1:
                i+=val[2]
        li=[['Women Clothing',a],['Women Accessories',b],['Women Footwear',c],
        ['Men Clothing',d],['Men Accessories',e],['Men Footwear',f],
        ['Kids Clothing',g],['Kids Accessories',h],['Kids Footwear',i]]
        return li

    def lineGraph(self):
        self.query='SELECT date,quantity FROM orders'
        self.exec()
        values=self.cur.fetchall()
        li=[]
        months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
        q=0
        m=''
        for row in values:
            date=str(row[0])[5:7]
            q+=row[1]
            if m!=months[int(date)-1]:
                li.append([m,q])
                m=months[int(date)-1]
                q=row[1]
        li.append([m,q])
        return li

    def Deliver(self,data):
        self.query="UPDATE orders SET delivered='Yes' WHERE order_id=%s"
        flag=self.exec(data['id'])
        return flag

    def sendChat(self,data):
        no=1
        self.query='SELECT sr_no FROM chatbox ORDER BY sr_no DESC'
        self.exec()
        num=self.cur.fetchone()
        if(num is not None):
            no=num[0]+1
        self.query="INSERT INTO chatbox (`sr_no`, `username`, `admin_msg`, `customer_msg`) VALUES (%s,%s,%s,%s)"
        flag=self.exec((no,data['uname'],data['a_msg'],data['c_msg']))
        return flag

    def getChat(self,data):
        self.query="SELECT * FROM chatbox WHERE username=%s"
        self.exec(data['username'])
        li=[]
        vals=self.cur.fetchall()
        for row in vals:
            li.append([row[2],row[3]])
        return li

    def AdminChats(self,data):
        self.query="SELECT username FROM chatbox"
        self.exec()
        li=[]
        val=self.cur.fetchall()
        for row in val:
            if(row[0] not in li):
                li.append(row[0])
        return li