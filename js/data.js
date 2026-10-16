/* Datos enteramente FICTICIOS. Nunca presentarlos como evidencia real. */
(function(){
const grains=['frijol','frijol','frijol','arroz','maiz'];
const days=[3,6,9,12,16,19,22,25];
let ops=[];
for(let month=4;month<=9;month++){
 for(let i=0;i<(month===9?5:days.length);i++){
  const grain=grains[(i+month)%grains.length];
  const entered=+Math.min(5,3.5+(i%4)*.45+(month%2)*.2).toFixed(2);
  const dirt=+(entered*(.045+((i+month)%4)*.009)).toFixed(3);
  const goodLoss=+(entered*(.005+((i+month)%3)*.003)).toFixed(3);
  const cleaned=+(entered-dirt-goodLoss).toFixed(3);
  const minutes=+(entered*(3.35-((month-4)*.11))+((i%3)*.65)).toFixed(2);
  const date=`2026-${String(month+1).padStart(2,'0')}-${String(days[i]).padStart(2,'0')}`;
  ops.push({id:`demo-op-${month+1}-${i}`,date,grain,inputKg:entered,cleanKg:cleaned,minutes,impuritiesKg:dirt,goodLossKg:goodLoss,powerW:24+((i+month)%5),notes:'Registro ficticio para demostrar el funcionamiento del dashboard.',source:'demo'});
 }
}
const trials=[
{id:'demo-trial-1',date:'2026-06-02',grain:'frijol',kg:5,manualMin:26,aeroMin:13,notes:'Prueba simulada de referencia.',source:'demo'},
{id:'demo-trial-2',date:'2026-06-04',grain:'frijol',kg:5,manualMin:24,aeroMin:12,notes:'Prueba simulada de referencia.',source:'demo'},
{id:'demo-trial-3',date:'2026-06-08',grain:'frijol',kg:5,manualMin:27,aeroMin:13.5,notes:'Prueba simulada de referencia.',source:'demo'},
{id:'demo-trial-4',date:'2026-06-10',grain:'frijol',kg:5,manualMin:25,aeroMin:12.8,notes:'Prueba simulada de referencia.',source:'demo'}];
window.AG_DEMO={operations:ops,comparisons:trials};
})();
