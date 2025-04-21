from flask import Flask
from flask import jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Dummy states for tasks
task1_running = False
task2_running = False

@app.route('/start-task1', methods=['POST'])
def start_task1():
    global task1_running
    task1_running = True
    return jsonify({"task1Running": task1_running}), 200

@app.route('/stop-task1', methods=['POST'])
def stop_task1():
    global task1_running
    task1_running = False
    return jsonify({"task1Running": task1_running}), 200

@app.route('/start-task2', methods=['POST'])
def start_task2():
    global task2_running
    task2_running = True
    return jsonify({"task2Running": task2_running}), 200

@app.route('/stop-task2', methods=['POST'])
def stop_task2():
    global task2_running
    task2_running = False
    return jsonify({"task2Running": task2_running}), 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
