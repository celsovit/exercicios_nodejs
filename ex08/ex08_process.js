function temParam(param) {
    return process.argv.indexOf(param) !== -1
}

if (temParam('--producao')) {
    console.log('Atenção total!')
} else {
    console.log('Tranquilo!!!')
}

/* 

    No terminal:

    $ node ex08_process
    # saída: Tranquilo!!!

    $ node ex08_process -producao
    # saída: Tranquilo!!!

    $ node ex08_process --producao
    # saída: Atenção total!

*/
