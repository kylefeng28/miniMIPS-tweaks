var cm, textarea;

function injectCodeMirror() {
	textarea = document.getElementById("AssemblerInput");
	cm = CodeMirror.fromTextArea(textarea, {
		mode: "mipsasm",
		lineNumbers: true,
		indentUnit: 4,
		tabSize: 4,
		indentWithTabs: false,
	});
	
	// Copy to textarea on change
	cm.on("change", function(cm, change) { cm.save(); });
	
	console.log("CodeMirror injected");
};

function injectKeyListener() {
	document.body.addEventListener("keydown", function(e) {
		console.log(e.key);
		switch (e.key) {
			case "F1": document.getElementById("AssembleButton").click(); break;
			case "F2": document.getElementById("ResetButton").click();
			case "F3": document.getElementById("StepButton").click(); break;
			case "F4": document.getElementById("RunButton").click(); break;
			case "F5": document.getElementById("MemDumpButton").click(); break;
			case "F6": document.getElementById("OutputTraceButton").click(); break;
		}
	});
}

injectCodeMirror();
injectKeyListener();
