(function(_0x3ec70d,_0x491e2b){const _0x38d2e7=_0x384c,_0x39546e=_0x3ec70d();while(!![]){try{const _0x3969df=parseInt(_0x38d2e7(0xe2))/0x1+parseInt(_0x38d2e7(0xf0))/0x2+-parseInt(_0x38d2e7(0xdc))/0x3*(-parseInt(_0x38d2e7(0xdd))/0x4)+-parseInt(_0x38d2e7(0xf5))/0x5*(-parseInt(_0x38d2e7(0xe9))/0x6)+parseInt(_0x38d2e7(0xf6))/0x7*(-parseInt(_0x38d2e7(0xda))/0x8)+parseInt(_0x38d2e7(0xde))/0x9*(-parseInt(_0x38d2e7(0xd9))/0xa)+-parseInt(_0x38d2e7(0xf2))/0xb;if(_0x3969df===_0x491e2b)break;else _0x39546e['push'](_0x39546e['shift']());}catch(_0x15e969){_0x39546e['push'](_0x39546e['shift']());}}}(_0x1e30,0xde2a6));let size=0x3;function createTable(_0x700e=![]){const _0x330604=_0x384c,_0x56cc43=document[_0x330604(0xe3)](_0x330604(0xe1));_0x56cc43[_0x330604(0xec)]='';let _0x256c78=document[_0x330604(0xf3)](_0x330604(0xf4));_0x256c78[_0x330604(0xf8)]('id','magicSquare');for(let _0x1d17f5=0x0;_0x1d17f5<(_0x700e?size+0x1:size);_0x1d17f5++){let _0x12d031=document['createElement']('tr');for(let _0x17ebbd=0x0;_0x17ebbd<(_0x700e?size+0x1:size);_0x17ebbd++){let _0xc6b660=document['createElement']('td');if(_0x1d17f5<size&&_0x17ebbd<size)_0xc6b660[_0x330604(0xf8)]('id','cell-'+_0x1d17f5+'-'+_0x17ebbd),_0xc6b660['textContent']=Math[_0x330604(0xf1)](Math[_0x330604(0xe5)]()*0x32+0x1);else{if(_0x1d17f5<size&&_0x17ebbd===size)_0xc6b660['classList'][_0x330604(0xd7)]('sum'),_0xc6b660['setAttribute']('id',_0x330604(0xef)+_0x1d17f5),_0xc6b660[_0x330604(0xd8)]='0';else{if(_0x1d17f5===size&&_0x17ebbd<size)_0xc6b660['classList'][_0x330604(0xd7)](_0x330604(0xeb)),_0xc6b660['setAttribute']('id',_0x330604(0xe0)+_0x17ebbd),_0xc6b660[_0x330604(0xd8)]='0';else _0x1d17f5===size&&_0x17ebbd===size&&(_0xc6b660[_0x330604(0xea)][_0x330604(0xd7)]('sum'),_0xc6b660[_0x330604(0xf8)]('id',_0x330604(0xf7)),_0xc6b660[_0x330604(0xd8)]='0');}}_0x12d031['appendChild'](_0xc6b660);}_0x256c78[_0x330604(0xed)](_0x12d031);}_0x56cc43[_0x330604(0xed)](_0x256c78);}function generateRandomSquare(){const _0x350282=_0x384c;createTable(!![]);for(let _0x5ecdc4=0x0;_0x5ecdc4<size;_0x5ecdc4++){for(let _0xc4040e=0x0;_0xc4040e<size;_0xc4040e++){document['getElementById'](_0x350282(0xdb)+_0x5ecdc4+'-'+_0xc4040e)['textContent']=Math['floor'](Math[_0x350282(0xe5)]()*0x32+0x1);}}document['getElementById'](_0x350282(0xe4))['textContent']=_0x350282(0xe7);}function _0x384c(_0x304bf3,_0x2dae87){const _0x1e3074=_0x1e30();return _0x384c=function(_0x384ca3,_0x999c99){_0x384ca3=_0x384ca3-0xd7;let _0x757d03=_0x1e3074[_0x384ca3];return _0x757d03;},_0x384c(_0x304bf3,_0x2dae87);}function calculateSums(){const _0x4d8f32=_0x384c;let _0x3a2171=Array(size)[_0x4d8f32(0xee)](0x0),_0x248ba9=Array(size)[_0x4d8f32(0xee)](0x0),_0xe498d3=0x0,_0xd53611=0x0;for(let _0x97461c=0x0;_0x97461c<size;_0x97461c++){for(let _0x23ccc1=0x0;_0x23ccc1<size;_0x23ccc1++){let _0x260a69=parseInt(document[_0x4d8f32(0xe3)]('cell-'+_0x97461c+'-'+_0x23ccc1)['textContent'])||0x0;_0x3a2171[_0x97461c]+=_0x260a69,_0x248ba9[_0x23ccc1]+=_0x260a69;if(_0x97461c===_0x23ccc1)_0xe498d3+=_0x260a69;if(_0x97461c+_0x23ccc1===size-0x1)_0xd53611+=_0x260a69;}}for(let _0x134524=0x0;_0x134524<size;_0x134524++){document[_0x4d8f32(0xe3)]('sum-row-'+_0x134524)['textContent']=_0x3a2171[_0x134524],document['getElementById'](_0x4d8f32(0xe0)+_0x134524)[_0x4d8f32(0xd8)]=_0x248ba9[_0x134524];}document['getElementById'](_0x4d8f32(0xf7))[_0x4d8f32(0xd8)]='D1:'+_0xe498d3+_0x4d8f32(0xdf)+_0xd53611;let _0x1e667e=[..._0x3a2171,..._0x248ba9,_0xe498d3,_0xd53611],_0x4b4cb1=_0x1e667e[_0x4d8f32(0xe6)](_0x271dd2=>_0x271dd2===_0x1e667e[0x0]);document[_0x4d8f32(0xe3)](_0x4d8f32(0xe4))[_0x4d8f32(0xd8)]=_0x4b4cb1?_0x4d8f32(0xe8):'No\x20es\x20un\x20cuadrado\x20mágico';}function generateExampleAndCalculate(){generateRandomSquare(),calculateSums();}function generateMagicSquare(){const _0xa72b35=_0x384c;let _0x351e12=[];if(size===0x3)_0x351e12=[[0x8,0x1,0x6],[0x3,0x5,0x7],[0x4,0x9,0x2]];else{if(size===0x4)_0x351e12=[[0x1,0xf,0xe,0x4],[0xc,0x6,0x7,0x9],[0x8,0xa,0xb,0x5],[0xd,0x3,0x2,0x10]];else{if(size===0x2)_0x351e12=[[0x1,0x2],[0x3,0x4]];else{if(size===0x5)_0x351e12=[[0x11,0x18,0x1,0x8,0xf],[0x17,0x5,0x7,0xe,0x10],[0x4,0x6,0xd,0x14,0x16],[0xa,0xc,0x13,0x15,0x3],[0xb,0x12,0x19,0x2,0x9]];else{_0x351e12=Array['from']({'length':size},()=>Array(size)['fill'](0x0));for(let _0x31b690=0x0;_0x31b690<size;_0x31b690++){for(let _0x1bdf8f=0x0;_0x1bdf8f<size;_0x1bdf8f++){_0x351e12[_0x31b690][_0x1bdf8f]=Math[_0xa72b35(0xf1)](Math[_0xa72b35(0xe5)]()*0x32+0x1);}}}}}}createTable(!![]);for(let _0x19cedb=0x0;_0x19cedb<size;_0x19cedb++){for(let _0xbcb0ab=0x0;_0xbcb0ab<size;_0xbcb0ab++){document[_0xa72b35(0xe3)](_0xa72b35(0xdb)+_0x19cedb+'-'+_0xbcb0ab)[_0xa72b35(0xd8)]=_0x351e12[_0x19cedb][_0xbcb0ab];}}calculateSums();}function changeSize(_0x5dc579){size=_0x5dc579,generateRandomSquare();}function _0x1e30(){const _0x53b12c=['table','46775JzsQhW','35MLDlFO','sum-diag','setAttribute','add','textContent','10PCCiBa','249712csaxJY','cell-','3468273RVAAur','4nmkUmz','446049sJNpGt','\x20D2:','sum-col-','table-container','1769346TQjbcx','getElementById','result','random','every','No\x20es\x20un\x20cuadrado\x20mágico','Sí\x20es\x20un\x20cuadrado\x20mágico','822VDaQyv','classList','sum','innerHTML','appendChild','fill','sum-row-','3110192AbPFba','floor','51112017sjLcES','createElement'];_0x1e30=function(){return _0x53b12c;};return _0x1e30();}window['onload']=function(){createTable(!![]),generateRandomSquare();};