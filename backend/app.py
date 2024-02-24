from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*" : {"origins":"*"}})

@app.route('/api/data')
def get_data():
  data = {'message': 'Hello from Flask'}
  return jsonify(data)

if __name__ == '__main__':
  app.run(debug=True)