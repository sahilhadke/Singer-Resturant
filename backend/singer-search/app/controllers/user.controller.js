const User = require('../models/user.model');

// find all note
exports.findAll = (req, res) => {
    User.find()
    .then(user => {
        res.send(user);
        console.log("Note found successfully...");
    })
    .catch(err => {
        res.send(500).send({
            message: "Something went wrong :("
        });
    });
};

// fine one user
exports.find = (req, res) => {
    
    // Object initialization for sort and filter
    var sort = { name : -1 };
    var filter = {};

    // Filter/Sort Queries
    for (let key in req.query) { 
        if (req.query.hasOwnProperty(key)) { 
            
            // Query for sort
            if(key == "s"){

                // sort for name
                if(req.query.s == "name-desc" || req.query.s == "name-asc")
                    sort.name = (req.query.s == "name-desc") ? 1 : -1

                // sort for age 
                else if(req.query.s == "age-desc" || req.query.s == "age-asc")
                    sort.age = (req.query.s == "age-desc") ? 1 : -1
            }

            // Query for filters
            else{              
                filter[key] = new RegExp(req.query[key], 'i');                                
            }            
        }
    }

    // Number of users found in db
    User.count(filter, (err, count) => {
        console.log( "Number of users: ", count );
    });

    // Find the users in db
    User.find(filter).sort(sort)
    .then(user => {
        if(!user){
            return res.send(404).send({
                message: "Not found :("
            });
        }
        console.log("Note found successfully...");
        res.send(user);
    })
    .catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found"
            });
        }  
        return res.status(500).send({
            message: "Error retrieving user"
        });              
    });
};

// Create note
// exports.create = (req, res) => {

//     // validate req
//     if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
//         console.log('Empty user');
//     }

//     // create note
//     else{
//         const user = new User({
//             email : req.body.email,
//             name : req.body.name,
//             password : req.body.password,
//             gender : req.body.gender,
//             age : req.body.age,
//             phone : req.body.phone,
//             bio : req.body.bio,
//             city : req.body.city
//         })

//         user.save()
//         .then(data => {
//             res.send(data);
//             console.log("Performer created successfully...");
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Something went wrong :("
//             });
//         });
//     }
// };

