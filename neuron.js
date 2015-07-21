var synaptic = require('synaptic'); // this line is not needed in the browser

var Neuron = synaptic.Neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Architect = synaptic.Architect;


var A = new Neuron();
var B = new Neuron();
var connection = A.project(B);

var C = new Neuron();
C.gate(connection); // now C gates the connection between A and B

A.activate(224); // 0.5
console.log(B.activate()); // 0.3244554645

var input =  