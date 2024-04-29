const subjects = [
            { name: "Maths", marks: 85 },
            { name: "Science", marks: 92 },
            { name: "English", marks: 76 },
            { name: "History", marks: 60 },
            { name: "Art", marks: 45 }
        ];

        function calculateGrade(marks) {
            let grade;

            if (marks >= 90) {
                grade = 'A';
            } else if (marks >= 80 && marks < 90) {
                grade = 'B';
            } else if (marks >= 70 && marks < 80) {
                grade = 'C';
            } else if (marks >= 60 && marks < 70) {
                grade = 'D';
            } else {
                grade = 'F';
            }

            return grade;
        }

        document.getElementById('marks').innerHTML = `<h1>This is marks and grade for loop</h1>`;

        for (let subject of subjects) {
            const { name, marks } = subject;
            const grade = calculateGrade(marks);
            document.getElementById('marks').innerHTML += `<p>${name}: Marks - ${marks}, Grade - ${grade}</p>`;
        }