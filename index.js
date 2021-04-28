const { app } = require('./core');
const { db, update } = require('./db');

app.listen(3000, () => {
    console.log('API for smart home 1.1 up n running.')
})

/* CODE YOUR API HERE */

// GET ALL DEVICES
app.get('/', (req, res) => {
    const devices = db.get('devices').value();
    res.send(devices);
})

// GET AC
app.get('/ac', (req, res) => {
    // Allowing us to use querys in our request handling
    const activate = req.query.activate === 'on' ? true : false;

    // Using the diffrent functions included in the assignment
    const result = db.get('devices').find({ id : 'AC1' }).assign({ on : activate }).value()

    console.log(activate);
    console.log(result);

    // Updating the fontend state
    db.update();

    if(result){
        res.send(result)
    }
    else{
        res.send('Unable to find device');
    }
});

// GET BLIND
app.get('/blind', (req, res) => {
    // Allowing us to use querys in our request handling
    const activate = req.query.activate === 'on' ? true : false;

    // Using the diffrent functions included in the assignment
    const result = db.get('devices').find({ id : 'BLI1' }).assign({ on : activate }).value()

    // Updating the fontend state
    db.update();

    if(result){
        res.send(result)
    }
    else{
        res.send('Unable to find device');
    }
});

// GET LIGHT 1
app.get('/lig1', (req, res) => {
    // Allowing us to use querys in our request handling
    const activate = req.query.activate === 'on' ? true : false;

    // Using the diffrent functions included in the assignment
    const result = db.get('devices').find({ id : 'LIG1' }).assign({ on : activate }).value()

    // Updating the fontend state
    db.update();

    if(result){
        res.send(result)
    }
    else{
        res.send('Unable to find device');
    }
});

// GET LIGHT 2
app.get('/lig2', (req, res) => {
    // Allowing us to use querys in our request handling
    const activate = req.query.activate === 'on' ? true : false;

    // Using the diffrent functions included in the assignment
    const result = db.get('devices').find({ id : 'LIG2' }).assign({ on : activate }).value()

    // Updating the fontend state
    db.update();

    if(result){
        res.send(result)
    }
    else{
        res.send('Unable to find device');
    }
});

// GET LIGHT 3
app.get('/lig3', (req, res) => {
    // Allowing us to use querys in our request handling
    const activate = req.query.activate === 'on' ? true : false;

    // Using the diffrent functions included in the assignment
    const result = db.get('devices').find({ id : 'LIG3' }).assign({ on : activate }).value()

    // Updating the fontend state
    db.update();

    if(result){
        res.send(result)
    }
    else{
        res.send('Unable to find device');
    }
});

// GET CAMERA
app.get('/camera', (req, res) => {
    // Allowing us to use querys in our request handling
    const activate = req.query.activate === 'on' ? true : false;

    // Using the diffrent functions included in the assignment
    const result = db.get('devices').find({ id : 'CAM1' }).assign({ on : activate }).value()

    // Updating the fontend state
    db.update();

    if(result){
        res.send(result)
    }
    else{
        res.send('Unable to find device');
    }
});

// GET LOCK
app.get('/lock', (req, res) => {
    // Allowing us to use querys in our request handling
    const activate = req.query.activate === 'on' ? true : false;

    // Using the diffrent functions included in the assignment
    const result = db.get('devices').find({ id : 'LOC1' }).assign({ on : activate }).value()

    // Updating the fontend state
    db.update();

    if(result){
        res.send(result)
    }
    else{
        res.send('Unable to find device');
    }
});

// GET VACUUM
app.get('/vacuum', (req, res) => {
    // Allowing us to use querys in our request handling
    const activate = req.query.activate === 'on' ? true : false;

    // Using the diffrent functions included in the assignment
    const result = db.get('devices').find({ id : 'VAC1' }).assign({ on : activate }).value()

    // Updating the fontend state
    db.update();

    if(result){
        res.send(result)
    }
    else{
        res.send('Unable to find device');
    }
});

// GET SPEAKER
app.get('/speaker', (req, res) => {
    // Allowing us to use querys in our request handling
    const activate = req.query.activate === 'on' ? true : false;

    // Using the diffrent functions included in the assignment
    const result = db.get('devices').find({ id : 'SPE1' }).assign({ on : activate }).value()

    // Updating the fontend state
    db.update();

    if(result){
        res.send(result)
    }
    else{
        res.send('Unable to find device');
    }
});