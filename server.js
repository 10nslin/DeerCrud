const express = require('express');
const path = require ('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'./public/dist')));

//mongo/mongoose
mongoose.connect('mongodb://localhost/deerCRUD');
mongoose.connection.on;

mongoose.Promise = global.Promise;


const DeerSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: [2, 'Name must be atleast 2 characters']},
    age: {type: Number, required: [true,'Age must be present']},
    gender: {type: String, required: true} 
}, {timestamps: true});

mongoose.model('Deer', DeerSchema);
const Deer = mongoose.model('Deer');

//Routes
app.get('/deers', (req, res)=>{
    Deer.find({}, (err, deer)=>{
        if(err){
            res.json({message: 'error', errors: err});
        }else{
            res.json({message: 'success', deer: deer});
        }
    })
});

//Create
app.post('/deers', (req, res)=>{
    const newDeer = new Deer(req.body);
    newDeer.save((err,deer)=>{
        if(err){
            console.log(err);
            res.json({message: 'error', errors: err});
        }else {
            console.log(deer);
            res.json({message: 'success', deer: deer});
        }
    })
});
//Show
app.get('/deers/:id', (req, res)=>{
    const id = req.params.id;
    Deer.findOne({_id:id}, (err,deer)=>{
        if(err){
            console.log(err);
            res.json({message: 'error', errors: err});
        }else {
            console.log(deer);
            res.json({message: 'success', deer: deer});
        }
    })
});

//Update
app.put('/deers/:id', (req, res)=>{
    const id = req.params.id;
    Deer.findById(id, (err,deer)=>{
        if(err){
            console.log(err);
            res.json({message: 'error', errors: err});
        }else {
            console.log(deer);
            res.json({message: 'success', deer: deer});
        }
        deer.name = req.body.name;
        deer.age = req.body.age;
        deer.gender = req.body.gender;
        deer.save((err, deer)=> {
            if(err){
                console.log(err);
                res.json({message: 'error', errors: err});
            }else {
                console.log(deer);
                res.json({message: 'success', deer: deer});
            }
        });
    });
});

//Delete
app.delete('/deers/:id', (req,res)=>{
    const id = req.params.id;
    Deer.deleteOne({_id: id}, (err)=>{
        if(err){
            console.log(err);
            res.json({message: 'error', errors: err});
        }else {
            res.json({message: 'success'});
        }
    });
});

app.all('*', (req,res, next)=>{
    res.sendFile(path.resolve('./public/dist/index.html'));
})

app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`)
})