console.log(process.argv)

/*

    No terminal:

    $ node ex08_argv param1 param2 param3

    saída:
    [
        '/usr/bin/node',    // onde o node está instalado
        '/media/celsorv/2TB/exercicios_node/ex08_argv.js',
        'param1',
        'param2',
        'param3'
    ]



    $ node ex08_argv --banana laranja /manga

    saída:
    [
        '/usr/bin/node',
        '/media/celsorv/2TB/exercicios_node/ex08_argv.js',
        '--banana',
        'laranja',
        '/manga'
    ]

*/

