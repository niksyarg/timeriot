function openModal() {
    document.getElementById("lessonModal").style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById("lessonModal").style.display = "none";
    document.body.style.overflow = "auto";
}

function checkDetailedTest() {
    let score = 0;
    let total = 3;

    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q1_2"]:checked');
    let q3 = document.querySelector('input[name="q1_3"]:checked');

    if (!q1 || !q2 || !q3) {
        alert("გთხოვთ უპასუხოთ ყველა კითხვას!");
        return;
    }

    if (q1.value === "correct") score++;
    if (q2.value === "correct") score++;
    if (q3.value === "correct") score++;

    let resultText = document.getElementById('test-result');
    
    if (score === total) {
        resultText.innerHTML = "ყოჩაღ! ყველა პასუხი სწორია! 🏆";
        resultText.style.color = "#2ecc71"; 
    } else {
        resultText.innerHTML = "შენი შედეგია " + score + " / " + total + ". სცადე თავიდან! 🔄";
        resultText.style.color = "#ff4d4d";
    }
}

window.onclick = function(event) {
    const modal = document.getElementById("lessonModal");
    if (event.target == modal) {
        closeModal();
    }
}