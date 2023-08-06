from flask import Flask, request, jsonify
from flask_cors import CORS
import openpyxl

app = Flask(__name__)
CORS(app)
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
    user_id = data.get('userId')

    # Load Excel file
    wb = openpyxl.load_workbook('user_data.xlsx')
    ws = wb.active

    # Find the row with the matching user ID
    user_row = None
    for row in ws.iter_rows(min_row=2, values_only=True):
        if row[0] == user_id:
            user_row = row
            break

    if user_row:
        user_data = {
            'userName': user_row[1],
            'circle': user_row[2],
            'ba': user_row[3],
            'phone': user_row[4]
            # Add more fields as needed
        }
        return jsonify(user_data)
    else:
        return jsonify({'message': 'User not found'}), 404


if __name__ == '__main__':
    app.run()
