from os import write
import pymysql
import hashlib

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
                val2=self.cur.fetchone()
                if flag2==1 and val2 is not None:
                    write_file(val2[1],r"C:\Users\Madhavi\Downloads\img2.png")
                    prods={"name":row[0],"image":r"C:\Users\Madhavi\Downloads\img2.png","price":row[1],"quantity":row[2],"filters":row[3],"details":row[4]}
                    li.append(prods)
            return li
        return 0