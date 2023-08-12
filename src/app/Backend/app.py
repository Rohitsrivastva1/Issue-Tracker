from flask import Flask, request, jsonify
from flask_cors import CORS
import openpyxl
import pandas as pd
from flask_socketio import SocketIO, emit

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app)

# Example: Load admin users from Excel into a dictionary
admin_users = {
    "admin": "admin123",
    "manager": "manager123",
    # ... other admin users
}


@app.route('/login', methods=['POST'])
def login():
    data = request.json
    print('s',data)
    username = data.get('username')
    password = data.get('password')
    # print(admin_users)
    if username in admin_users and admin_users[username] == password:
        return jsonify({"message": "Login successful"})
    else:
        return jsonify({"message": "Invalid credentials"}), 401

# Other routes and configurations...


@app.route('/api/get-user-data', methods=['POST'])
def get_user_data():
    data = request.json
    user_id = int(data.get('userId'))
    print(user_id)
    # Load Excel file
    wb = openpyxl.load_workbook('src/app/Backend/user_data.xlsx')
    ws = wb.active

    # Find the row with the matching user ID
    user_row = None
    for row in ws.iter_rows(min_row=2, values_only=True):
        print(int(row[0]),user_id)
        if int(row[0]) == user_id:
            user_row = row
            break

    # user_data = {
    #     'userName': 'rohit',
    #     'circle': 'punjab',
    #     'ba': 'ci',
    #     'phone': '6394322640'
    #     # Add more fields as needed
    # }
    if user_row:
        user_data = {
            'userName': user_row[1],
            'circle': user_row[2],
            'ba': user_row[3],
            'phone': user_row[4]
            # Add more fields as needed
        }
        print(user_data)
        return jsonify(user_data)
    # return jsonify(user_data)
    else:
        return jsonify({'message': 'User not found'}), 404


def load_issues():
    # excel_file = 'path/to/your/excel/file.xlsx'
    # df = pd.read_excel(excel_file)
    user_data = {
        'userName': 'rohit',
        'circle': 'punjab',
        'ba': 'ci',
        'phone': '6394322640'
        # Add more fields as needed
    }
    # return df.to_dict(orient='records')
    return user_data


def append_to_excel(data):
    # columns = [
    #         'User Id', 'User Name', 'User Role', 'Circle', 'BA', 'Phone',
    #         'no. of users', 'issue Category', 'Issue Date', 'Issue Time',
    #         'Resolution Time', 'Issue Description'
    #     ]
    excel_file = 'src/app/Backend/logs.xlsx'
    # excel_file = 'path/to/your/excel/file.xlsx'
    # df = pd.DataFrame(data)
    df = pd.DataFrame(data)
    try:
        existing_df = pd.read_excel(excel_file)
        new_df = pd.concat([existing_df, df], ignore_index=True)

        # new_df = existing_df.append(pd.DataFrame(data), ignore_index=True)
    except FileNotFoundError:
        new_df = pd.DataFrame(data)

    new_df.to_excel(excel_file, index=False)




@app.route('/api/add-issue', methods=['POST'])
def get_issues():
    

    data = request.json
    print('---',data)
    append_to_excel([data])  # Assuming data is a dictionary
    emit('new_issue_added', data, broadcast=True)
    return jsonify({"message": "Issue added successfully"})

if __name__ == '__main__':
    socketio.run(app)
