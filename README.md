# task-mates

Feature

- User authentication
- Task creation
- Task editing
- Task deletion
- Task updating

## setup

- place the ProtectedUrls.js file in the project directory as shown in the image below
  <img src="./tasks-ready/client/src/assets/setup1.png">

```JavaScript
const ProtectedUrls = {
  baseUrl: "http://localhost:5000/api",
};

export default ProtectedUrls;

```

- place environment variables in server root directory

[format]

```javascript
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/taskmates
JWT_SECRET = YOURSECRETKEY
```
