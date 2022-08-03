// https://calculator.swiftutors.com/emf-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const electromotiveForceRadio = document.getElementById('electromotiveForceRadio');
const currentRadio = document.getElementById('currentRadio');
const resistenceOfLoadinCircuitRadio = document.getElementById('resistenceOfLoadinCircuitRadio');
const internalResitanceofCellRadio = document.getElementById('internalResitanceofCellRadio');

let electromotiveForce;
let current = v1;
let resistenceOfLoadinCircuit = v2;
let internalResitanceofCell = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

electromotiveForceRadio.addEventListener('click', function() {
  variable1.textContent = '(I) Current (amps)';
  variable2.textContent = '(R) Resistence Of Load In Circuit (ohms)';
  variable3.textContent = '(r) Internal Resitance of Cell (ohms)';
  current = v1;
  resistenceOfLoadinCircuit = v2;
  internalResitanceofCell = v3;
  result.textContent = '';
});

currentRadio.addEventListener('click', function() {
  variable1.textContent = '(ε) Electromotive force (volts)';
  variable2.textContent = '(R) Resistence Of Load In Circuit (ohms)';
  variable3.textContent = '(r) Internal Resitance of Cell (ohms)';
  electromotiveForce = v1;
  resistenceOfLoadinCircuit = v2;
  internalResitanceofCell = v3;
  result.textContent = '';
});

resistenceOfLoadinCircuitRadio.addEventListener('click', function() {
  variable1.textContent = '(ε) Electromotive force (volts)';
  variable2.textContent = '(I) Current (amps)';
  variable3.textContent = '(r) Internal Resitance of Cell (ohms)';
  electromotiveForce = v1;
  current = v2;
  internalResitanceofCell = v3;
  result.textContent = '';
});

internalResitanceofCellRadio.addEventListener('click', function() {
  variable1.textContent = '(ε) Electromotive force (volts)';
  variable2.textContent = '(I) Current (amps)';
  variable3.textContent = '(R) Resistence Of Load In Circuit (ohms)';
  electromotiveForce = v1;
  current = v2;
  resistenceOfLoadinCircuit = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(electromotiveForceRadio.checked)
    result.textContent = `Electromotive force = ${computeElectromotiveforce().toFixed(2)} volts`;

  else if(currentRadio.checked)
    result.textContent = `Current = ${computeCurrent().toFixed(2)} amps`;

  else if(resistenceOfLoadinCircuitRadio.checked)
    result.textContent = `Resistence Of Load In Circuit = ${computeResistenceOfLoadInCircuit().toFixed(2)} ohms`;

  else if(internalResitanceofCellRadio.checked)
    result.textContent = `Internal Resitance of Cell = ${computeInternalResitanceofCell().toFixed(2)} ohms`;
})

// calculation

function computeElectromotiveforce() {
  return Number(current.value) * (Number(resistenceOfLoadinCircuit.value) + Number(internalResitanceofCell.value));
}

function computeCurrent() {
  return Number(electromotiveForce.value) / (Number(resistenceOfLoadinCircuit.value) + Number(internalResitanceofCell.value));
}

function computeResistenceOfLoadInCircuit() {
  return (Number(electromotiveForce.value) - (Number(current.value) * Number(internalResitanceofCell.value))) / Number(current.value);
}

function computeInternalResitanceofCell() {
  return (Number(electromotiveForce.value) - (Number(current.value) * Number(resistenceOfLoadinCircuit.value))) / Number(current.value);
}