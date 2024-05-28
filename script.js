function calculateAge() {
            const dateOfBirthInput = document.getElementById('dob').value;
            const birthDate = new Date(dateOfBirthInput);

            if (isNaN(birthDate.getTime())) {
                document.getElementById('result').innerText = "Format de date invalide. Veuillez utiliser AAAA-MM-JJ.";
                return;
            }

            setTimeout(() => {
                const now = new Date();
                let age = now.getFullYear() - birthDate.getFullYear();
                const monthDiff = now.getMonth() - birthDate.getMonth();
                const dayDiff = now.getDate() - birthDate.getDate();

                if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
                    age--;
                }

                document.getElementById('result').innerText = `Vous avez ${age} ans.`;
            }, 2000);
        };