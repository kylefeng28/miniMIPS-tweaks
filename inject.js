var cm, textarea;
var arch;

function injectCodeMirror(arch) {
	textarea = document.getElementById('AssemblerInput');

	var cmConfig = {
		mode: '',
		lineNumbers: true,
		indentUnit: 4,
		tabSize: 4,
		indentWithTabs: false,
	};

	// Set mode (MIPS or ARM)
	if (arch === 'mips') {
		cmConfig.mode = 'mipsasm';
	} else if (arch === 'arm') {
		cmConfig.mode = 'gas';
		cmConfig.architecture = 'arm';
	}

	cm = CodeMirror.fromTextArea(textarea, cmConfig);

	// Copy to textarea on change
	cm.on('change', function(cm, change) { cm.save(); });

	console.log('CodeMirror injected');
};

function injectKeyListener() {
	document.body.addEventListener('keydown', function(e) {
		switch (e.key) {
		case 'F1': document.getElementById('AssembleButton').click(); break;
		case 'F2': document.getElementById('ResetButton').click();
		case 'F3': document.getElementById('StepButton').click(); break;
		case 'F4': document.getElementById('RunButton').click(); break;
		case 'F5': document.getElementById('MemDumpButton').click(); break;
		case 'F6': document.getElementById('OutputTraceButton').click(); break;
		}
	});
}

(function() {
	if (document.title.indexOf('miniMIPS') > 0) {
		arch = 'mips';
	} else if (document.title.indexOf('miniARM') > 0) {
		arch = 'arm';
	}

	injectCodeMirror(arch);
	injectKeyListener();
})();
