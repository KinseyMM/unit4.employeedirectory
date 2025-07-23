import express from "express";
import employees from "./db/employees.js";
import employeesRouter from "./api/employees.js";

const app = express();

app.route("/").get((request, response) => {
    response.send("Hello, World!");
})

app.get("/", (request, response) => {
    response.send("Hello, World!");
})

app.get("/employees", (request, response) => {
 
    response.json(employees);
});

app.get("/employees/:id", (request, response) => {
    const employee = employees.find(emp => emp.id === parseInt(request.params.id));
    if (employee) {
        response.json(employee);
    } else {
        response.status(404).send("Employee not found");
    }
});

app.get("/employees/random", (request, response) => {

    const randomIndex = Math.floor(Math.random() * employees.length);
    response.json(employees[randomIndex]);
});

export default app;