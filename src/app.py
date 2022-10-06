
# A very simple Flask Hello World app for you to get started with...

from flask import Flask
from flask import jsonify
from flask import request

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello from Flask!!!!!'

@app.route('/help')
def world():
    print("aaaaaaaaaaaaaa")
    return 'Help!'

@app.route("/get_my_ip", methods=["GET"])
def get_my_ip():
    # a = 1
    attribs = dir(request)
    for i, a in enumerate(attribs):
        print(a, getattr(request, attribs[i]))
    print(dir(request))
    # return jsonify({'ip': request.headers['X-Real-IP']}), 200
    return "Check consloe"

# main driver function
if __name__ == '__main__':
 
    # run() method of Flask class runs the application
    # on the local development server.
    app.run(host="175.111.123.67")

