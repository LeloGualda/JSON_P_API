

var facts = [
  ['gabriel', 'endereço', 'av rio branco, 109', true],
  ['joão', 'endereço', 'rua alice, 10', true],
  ['joão', 'endereço', 'rua bob, 88', true],
  ['joão', 'telefone', '234-5678', true],
  ['joão', 'telefone', '91234-5555', true],
  ['joão', 'telefone', '234-5678', false],
  ['gabriel', 'telefone', '98888-1111', true],
  ['gabriel', 'telefone', '56789-1010', true],
];


var schema = [
    ['endereço', 'cardinality', 'one'],
    ['telefone', 'cardinality', 'many']
];


function fatos_vigentes(argument) {
	
}


//['gabriel', 'endereço', 'av rio branco, 109', true],
//['joão', 'endereço', 'rua bob, 88', true],
//['joão', 'telefone', '234-5678', true], (LINHA FALTANDO)
//['joão', 'telefone', '91234-5555', true],
//['gabriel', 'telefone', '98888-1111', true],
//['gabriel', 'telefone', '56789-1010', true]
