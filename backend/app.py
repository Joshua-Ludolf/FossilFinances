from flask import Flask, jsonify, request, abort
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route('/message', methods = ['POST'])
def get_data():
    # get the number and message from the query parameters
    number = request.args.get('number')
    message = request.args.get('message')
    # validate the inputs
    if not number or not message:
        abort(400, 'Invalid inputs')
    # send the message using pywhatkit
    try:
        import pywhatkit
        pywhatkit.sendwhatmsg_instantly('+1' + number.rstrip('-'), message, 10)
        return jsonify({'success': 'Message sent'})
    except Exception as e:
        abort(500, str(e))


@app.route('/')
def welcome():
    data = {'message': 'Hello from Flask'}
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
