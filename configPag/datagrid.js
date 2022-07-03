const gridOptions = {
  columnDefs : [
    { 
        field: "Nome",    
    },
    { 
      field: "Email",
      
    },
    {
      field: "Data",
    },
    { 
    field: "Dia",
    maxWidth: 90,
    filter: 'agDateColumnFilter',
    // filterParams: filterParams,
    cellClassRules: {
      'rag-green-outer': 'x >= 15',
      'rag-yellow-outer': 'x >= 16 && x < 20',
      'rag-red-outer': 'x < 21',
    },
    cellRenderer: ragRenderer,
    },
    {
      field: "Usuario",
      cellClass: cellClass,
    }
  ],
  defaultColDef: {
    sortable: true,
    floatingFilter: true,
    filter: true,
    editable: true
  },
  debugger: true,
  rowSelection: 'multiple',
  getRowId: (params) => params.data.id,
  rowDragManaged: true,
  suppressMoveWhenRowDragging: true,
  animateRows: true,
  onCellValueChanged: onCellValueChanged,
};

async function atualizar() {
  fetch(API_URL + 'usuarios')
    .then((response) => response.json())
    .then((data) => gridOptions.api.setRowData(data));
}

async function atualizarUsuario(usuario) {

  const scoutNames = await fetch(API_URL + 'usuario', {
    method: 'put',
    body: JSON.stringify(usuario),
    headers: {
      'Content-Type': 'application/json'
    }, 
  })
      .then((response) => response.json())
      .then((data) => gridOptions.api.setRowData(data));
}

async function onRemoveSelected() {
  var selectedRowData = gridOptions.api.getSelectedRows();
  
  gridOptions.api.applyTransaction({ remove: selectedRowData });
  
  console.log(selectedRowData[0].id)
  const scoutNames = await fetch(`${API_URL}usuario/${selectedRowData[0].id}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    }, 
  })
      .then((response) => response.json())
      .then((data) => gridOptions.api.setRowData(data));
}

// "id":1,"Nome":"João bbbb","Email":"Celica@hotmail.com","Ano":2022,"Data":"22-03-2022","usuario":"Premium"

function addDRow() {
  gridOptions.api.applyTransaction({ add: [{ Nome: 'Add Nome', Email: 'Add Email', Ano: '0000', Data: '00-00-0000', Dia: '00', Usuario: 'Basic' }] });
  fetch(`${API_URL}usuario`, {
    method: 'post',
    body: JSON.stringify({Nome: 'Add Nome', Email: 'Add Email', Ano: '0000', Data: '00-00-0000', Dia: '00', Usuario: 'Basic'}),
    headers: {
      'Content-Type': 'application/json'
    }, 
  })
      .then((response) => response.json())
      .then((data) => gridOptions.api.setRowData(data));
}
    
function cellStyle(params) {
    const color = numberToColor(params.value);
    return {
      backgroundColor: color,
    };
};
  
function cellClass(params) {
    return params.value === 'Premium' ? 'rag-green' : 'rag-yellow';
};
  
function numberToColor(val) {
    if (val === 0) {
      return '#ffaaaa';
    } else if (val == 1) {
      return '#aaaaff';
    } else {
      return '#aaffaa';
    }
};
  
function ragRenderer(params) {
    return '<span class="rag-element">' + params.value + '</span>';
};
  
function numberParser(params) {
    const newValue = params.newValue;
    let valueAsNumber;
    if (newValue === null || newValue === undefined || newValue === '') {
      valueAsNumber = null;
    } else {
      valueAsNumber = parseFloat(params.newValue);
    }
    return valueAsNumber;
};

// let the grid know which columns and what data to use

async function onCellValueChanged(event) {
  await atualizarUsuario(event.data) 

};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function ()  {
    const gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);

    fetch(API_URL + 'usuarios')
    .then((response) => response.json())
    .then((data) => gridOptions.api.setRowData(data));
    // console.log
});

