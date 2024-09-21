function mediaDeNotas(estudantes) {
    let melhorEstudante = null
    let melhorMedia = 0
  
    for (let nomeDosEstudantes in estudantes) {
      const notas = estudantes[nomeDosEstudantes]
      const media = notas.reduce((acc, notas) => acc + notas, 0) / notas.length
  
      if (media > melhorMedia) {
        melhorMedia = media
        melhorEstudante = { nome: nomeDosEstudantes, media: media }
      }
    }
  
    return melhorEstudante
  }

  const estudantes = {
    "Sarah": [90, 80, 70],
    "Giovanna": [95, 85, 75],
    "Sthefanny": [80, 70, 60]
  };
  
  const melhorEstudante = mediaDeNotas(estudantes)
  console.log(melhorEstudante) 