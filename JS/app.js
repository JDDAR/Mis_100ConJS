const bgCuadricula = document.getElementById('bg__cuadricula');

const numberBox = 1000;

for (let i = 0; i < numberBox; i++) {
  const colorBox = document.createElement('div');
  colorBox.classList.add('colorBox');
  bgCuadricula.append(colorBox)
}