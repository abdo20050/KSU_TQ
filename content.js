

let tabLink = window.location.toString();


const NUMBER_Of_COLUMNS = 6;


chrome.storage.sync.get('mode', function (items) {
    // console.log(items.mode)
    if (items.mode === 'turbo') {

        // console.log(tabLink);
        if (tabLink == "https://edugate.ksu.edu.sa/ksu/ui/student/student_evaluation/index/activitiesInstructorsIndex.faces" ||
            tabLink == "http://edugate.ksu.edu.sa/ksu/ui/student/student_evaluation/index/activitiesInstructorsIndex.faces") {
            // console.log('صفحة التقييم');

            fillRatingOptions(4);

            // clearFormHiddenParams_frm
            var curForm = document.forms['frm'];
            curForm.elements['frm:_idcl'].value = null;

            document.forms['frm']['frm:_idcl'].value = 'frm:saveEval';
            document.forms['frm'].submit();
            submitForm('/ksu');
        }

        if (tabLink == "https://edugate.ksu.edu.sa/ksu/ui/student/student_evaluation/index/evaluationTypesIndex.faces" ||
            tabLink == "http://edugate.ksu.edu.sa/ksu/ui/student/student_evaluation/index/evaluationTypesIndex.faces") {

            // console.log('صفحة اختيار المقرر');


            var frmAction = document.getElementById('frm').action;
            // console.log(frmAction);
            if (frmAction == "https://edugate.ksu.edu.sa/ksu/ui/student/student_evaluation/index/activitiesInstructorsIndex.faces" ||
                frmAction == "http://edugate.ksu.edu.sa/ksu/ui/student/student_evaluation/index/activitiesInstructorsIndex.faces") {

                document.getElementById("frm:index").value = 0;

                // clearFormHiddenParams_frm
                var curForm = document.forms['frm'];
                curForm.elements['frm:_idcl'].value = null;

                document.forms['frm']['frm:_idcl'].value = 'frm:_id41:0:_id44';
                document.forms['frm'].submit();
            }

            clearFormHiddenParams_frm('frm');
        }

        if (tabLink == "https://edugate.ksu.edu.sa/ksu/ui/student/student_evaluation/index/evalQuestionsIndex.faces" ||
            tabLink == "http://edugate.ksu.edu.sa/ksu/ui/student/student_evaluation/index/evalQuestionsIndex.faces") {
            // console.log('logged');
            var frmAction = document.getElementById('frm').action;
            // console.log(frmAction);
            if (frmAction == "https://edugate.ksu.edu.sa/ksu/ui/student/student_evaluation/index/activitiesInstructorsIndex.faces" ||
                frmAction == "http://edugate.ksu.edu.sa/ksu/ui/student/student_evaluation/index/activitiesInstructorsIndex.faces") {
                // clearFormHiddenParams_frm
                var curForm = document.forms['frm'];
                curForm.elements['frm:_idcl'].value = null;

                document.forms['frm']['frm:_idcl'].value = 'frm:_id41:0:_id44';
                document.forms['frm'].submit();
            } else {

                // console.log('صفحة الرجوع بعد التقييم');
                // clearFormHiddenParams_frm
                var curForm = document.forms['frm'];
                curForm.elements['frm:_idcl'].value = null;

                document.forms['frm']['frm:_idcl'].value = 'frm:cmdLink';
                document.forms['frm'].submit();
            }
        }

    } else {
        turbo = false;
        if (tabLink == "https://edugate.ksu.edu.sa/ksu/ui/student/student_evaluation/index/activitiesInstructorsIndex.faces" ||
            tabLink == "http://edugate.ksu.edu.sa/ksu/ui/student/student_evaluation/index/activitiesInstructorsIndex.faces") {

            // rating page

            document.getElementById('tq1').addEventListener('click', ()=>fillRatingOptions(0))
            document.getElementById('tq2').addEventListener('click', ()=>fillRatingOptions(1))
            document.getElementById('tq3').addEventListener('click', ()=>fillRatingOptions(2))
            document.getElementById('tq4').addEventListener('click', ()=>fillRatingOptions(3))
            document.getElementById('tq5').addEventListener('click', ()=>fillRatingOptions(4))
            document.getElementById('tq6').addEventListener('click', ()=>fillRatingOptions(5))
        }
    }
});

function fillRatingOptions(option){
    const optionsArray = document.querySelectorAll('[id^="opt"]');

    var vir = option;
    for (var i = 0 ; i < optionsArray.length/NUMBER_Of_COLUMNS ; i++) {
        optionsArray[vir].checked = true;
        vir = vir + NUMBER_Of_COLUMNS;
    }

    // fool KSU Verification
    r[17*6].checked = true;
    r[40*6+2].checked = true;
}