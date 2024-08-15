from flask import Flask, jsonify, request, abort
from flask_cors import CORS, cross_origin

import fb

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


# POST ROUTE OF ACCOUNT INFO
@app.route('/certain_info/')
@cross_origin()
def get_certain_info():
    return fb.get_certain_account_info(request.args.get('user_id'))


# GET ROUTE OF ACCOUNT INFO
@app.route('/account_info/')
@cross_origin()
def get_account_info():
    return fb.get_info('YC37Tj0R4AbgOJdduyi4iSUbGPH2')


@app.route('/account_transaction/')
@cross_origin()
def transaction_update():
    return fb.account_update(request.args.get('user_id'), request.args.get('account'))


@app.route('/')
@cross_origin()
def welcome():
    data = {'message': 'Hello from FossilFinances'}
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
