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
        self.query = 'SELECT * FROM customers where email = %s'
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
                    write_file(val2[0][1],"img.png")
                    img = Image.open("img.png")
                    rgb_im = img.convert('RGB')
                    data = io.BytesIO()
                    rgb_im.save(data, "JPEG")
                    photo = base64.b64encode(data.getvalue())
                    photo1=photo.decode('utf-8')
                    if len(val2)>1:
                        write_file(val2[1][1],"img.png")
                        img = Image.open("img.png")
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

    def Customers(self):
        self.query='SELECT * FROM customers'
        li=[]
        flag=self.exec()
        val1=self.cur.fetchall()
        if flag==1:
            for row in val1:
                cust={"id":row[0],"firstname":row[1],"lastname":row[2],"contact":row[3],"email":row[4]}
                li.append(cust)
            return li
        return 0