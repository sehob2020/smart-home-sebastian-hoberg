const { app } = require('./core');
const { db, update } = require('./db');

app.listen(3000, () => {
    console.log('API for smart home 1.1 up n running.')
})

/* CODE YOUR API HERE */

// GET AC
app.get('/api/devices/ac/ac1', (req, res) => {
    // Allowing us to use querys in our request handling
    const power = req.query.power === 'on' ? true : false;

    // Using the diffrent functions included in the assignment
    const result = db.get('devices').find({ id : 'AC1' }).assign({ on : power }).value()

    console.log(power);
    console.log(result);

    if(result){
        res.send(result)
    }
    else{
        res.send('Unable to find device');
    }

    // Updating the fontend state
    update();
});

// GET BLIND
app.get('/api/devices/blinds/bli1', (req, res) => {
    // Allowing us to use querys in our request handling
    const power = req.query.power === 'on' ? true : false;

    // Using the diffrent functions included in the assignment
    const result = db.get('devices').find({ id : 'BLI1' }).assign({ on : power }).value()

    if(result){
        res.send(result)
    }
    else{
        res.send('Unable to find device');
    }

    // Updating the fontend state
    update();
});

// GET LIGHT 1
app.get('/api/devices/lights/lig1', (req, res) => {
    // Allowing us to use querys in our request handling
    const power = req.query.power === 'on' ? true : false;

    // Using the diffrent functions included in the assignment
    const result = db.get('devices').find({ id : 'LIG1' }).assign({ on : power }).value()

    if(result){
        res.send(result)
    }
    else{
        res.send('Unable to find device');
    }

    // Updating the fontend state
    update();
});

// GET LIGHT 2
app.get('/api/devices/lights/lig2', (req, res) => {
    // Allowing us to use querys in our request handling
    const power = req.query.power === 'on' ? true : false;

    // Using the diffrent functions included in the assignment
    const result = db.get('devices').find({ id : 'LIG2' }).assign({ on : power }).value()

    if(result){
        res.send(result)
    }
    else{
        res.send('Unable to find device');
    }

    // Updating the fontend state
    update();
});

// GET LIGHT 3
app.get('/api/devices/lights/lig3', (req, res) => {
    // Allowing us to use querys in our request handling
    const power = req.query.power === 'on' ? true : false;

    // Using the diffrent functions included in the assignment
    const result = db.get('devices').find({ id : 'LIG3' }).assign({ on : power }).value()

    if(result){
        res.send(result)
    }
    else{
        res.send('Unable to find device');
    }

    // Updating the fontend state
    update();
});

// GET CAMERA
app.get('/api/devices/cameras/cam1', (req, res) => {
    // Allowing us to use querys in our request handling
    const power = req.query.power === 'on' ? true : false;

    // Using the diffrent functions included in the assignment
    const result = db.get('devices').find({ id : 'CAM1' }).assign({ on : power }).value()

    if(result){
        res.send(result)
    }
    else{
        res.send('Unable to find device');
    }

    // Updating the fontend state
    update();
});

// GET LOCK
app.get('/api/devices/locks/loc1', (req, res) => {
    // Allowing us to use querys in our request handling
    const power = req.query.power === 'on' ? true : false;

    // Using the diffrent functions included in the assignment
    const result = db.get('devices').find({ id : 'LOC1' }).assign({ on : power }).value()

    if(result){
        res.send(result)
    }
    else{
        res.send('Unable to find device');
    }

    // Updating the fontend state
    update();
});

// GET VACUUM
app.get('/api/devices/vacuums/vac1', (req, res) => {
    // Allowing us to use querys in our request handling
    const power = req.query.power === 'on' ? true : false;

    // Using the diffrent functions included in the assignment
    const result = db.get('devices').find({ id : 'VAC1' }).assign({ on : power }).value()

    if(result){
        res.send(result)
    }
    else{
        res.send('Unable to find device');
    }

    // Updating the fontend state
    update();
});

// GET SPEAKER
app.get('/api/devices/speakers/spe1', (req, res) => {
    // Allowing us to use querys in our request handling
    const power = req.query.power === 'on' ? true : false;

    // Using the diffrent functions included in the assignment
    const result = db.get('devices').find({ id : 'SPE1' }).assign({ on : power }).value()

    if(result){
        res.send(result)
    }
    else{
        res.send('Unable to find device');
    }

    // Updating the fontend state
    update();
});