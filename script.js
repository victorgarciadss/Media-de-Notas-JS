function calcular(){
    let nome = (document.getElementById('txtnome').value)
    let tnota1 = document.getElementById('txtnota1')
    let tnota2 = document.getElementById('txtnota2')
    let tnota3 = document.getElementById('txtnota3')
    let nota1 = Number.parseFloat(tnota1.value)
    let nota2 = Number.parseFloat(tnota2.value)
    let nota3 = Number.parseFloat(tnota3.value)
    let total = 3
    let res = document.getElementById('res')
    let media = (nota1 + nota2 + nota3)/total;
    let média = `${media}`

    if(nome.length == 0 || tnota1.value.length == 0 || tnota2.value.length == 0 || tnota3.value.length == 0){
        res.innerHTML = 'Erro, preencha todos os dados!'
    } else {
        res.innerHTML = `<p>${nome} a sua Média é <strong>${media}<strong>.</p>`
        if(media == 10){
            res.innerHTML += `<p>Parabéns, você foi espetacular, continue assim!</p>`
        } else if(media < 10 && media >= 9){
            res.innerHTML += `<p>Ótimo, você foi muito bem, continue se dedicando!</p>`
        } else if(media < 9 && media >= 8){
            res.innerHTML += `<P>Você foi bem, mas pode ficar melhor ainda!</p>`
        } else if(media < 8 && media >= 6){
            res.innerHTML += `<p>Você teve um desempenho aceitável, mas pode melhorar bastante!</p>`
        } else if(media < 6 && media >= 3){
            res.innerHTML += `<p>Não foi legal, você teve um desempenho abaixo da média, tente se dedicar mais aos estudos!</p>`
        } else if(media < 3 && media >= 0){
            res.innerHTML += `<p>Seu desempenho foi péssimo, dedique-se bem mais do que está se dedicando agora!</p>`
        }

        if(nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10){
            res.innerHTML = 'Digite suas notas de 0 a 10'
        }



        if(média.length > 10){
            res.innerHTML = `<p>${nome} a sua Média é <strong>${media.toFixed(2)}<strong>.</p>`
            if(media == 10){
                res.innerHTML += `<p>Parabéns, você foi espetacular, continue assim!</p>`
            } else if(media < 10 && media >= 9){
                res.innerHTML += `<p>Ótimo, você foi muito bem, continue se dedicando!</p>`
            } else if(media < 9 && media >= 8){
                res.innerHTML += `<P>Você foi bem, mas pode ficar melhor ainda!</p>`
            } else if(media < 8 && media >= 6){
                res.innerHTML += `<p>Você teve um desempenho aceitável, mas pode melhorar bastante!</p>`
            } else if(media < 6 && media >= 3){
                res.innerHTML += `<p>Não foi legal, você teve um desempenho abaixo da média, tente se dedicar mais aos estudos!</p>`
            } else if(media < 3 && media >= 0){
                res.innerHTML += `<p>Seu desempenho foi péssimo, dedique-se bem mais do que está se dedicando agora!</p>`
            }

            if(nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10){
                res.innerHTML = 'Digite suas notas de 0 a 10'
            }
        }

        
    }
}


function limpar(){
    let nome = document.getElementById('txtnome').value
    let nota1 = document.getElementById('txtnota1').value
    let nota2 = document.getElementById('txtnota2').value
    let nota3 = document.getElementById('txtnota3').value
    let res = document.getElementById('res')
    if(nome.length == 0 && nota1.length == 0 && nota2.length == 0 && nota3.length == 0){
         window.alert('Digite os dados necessários antes de limpar.')
    } else {
        document.getElementById('txtnome').value='';
        document.getElementById('txtnota1').value='';
        document.getElementById('txtnota2').value='';
        document.getElementById('txtnota3').value='';
        res.innerHTML = ''
    }
        
    
}