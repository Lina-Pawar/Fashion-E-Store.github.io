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

    def getUserInfo(self, username):
        self.query = 'SELECT * FROM customers WHERE = %s'
        flag = self.exec(username)
        val = self.cur.fetchone()
        if flag == 1 and val is not None:
            return val
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
            else:
                return 0
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