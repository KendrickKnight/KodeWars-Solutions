function DNAtoRNA(dna) {
    if (dna.length == 0) {return ""}
    else {
      let rna =''
      for (let i=0;i<dna.length;i++){
        if (dna[i] ==="T"){rna = rna + "U"}
        else{rna = rna + dna[i]}
        console.log(dna[i])
      }
      return (rna)
    }
  }