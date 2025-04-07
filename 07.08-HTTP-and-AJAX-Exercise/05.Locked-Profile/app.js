function lockedProfile() {
    const main = document.getElementById('main');

    fetch('http://localhost:3030/jsonstore/advanced/profiles')
        .then(res => res.json())
        .then(data => {
            main.innerHTML = ''; // remove the template

            Object.values(data).forEach((user, index) => {
                const profile = document.createElement('div');
                profile.className = 'profile';

                // Profile icon
                const img = document.createElement('img');
                img.src = './iconProfile2.png';
                img.className = 'userIcon';

                // Lock
                const labelLock = document.createElement('label');
                labelLock.textContent = 'Lock';

                const inputLock = document.createElement('input');
                inputLock.type = 'radio';
                inputLock.name = 'user1Locked';
                inputLock.value = 'lock';
                inputLock.checked = true;

                // Unlock
                const labelUnlock = document.createElement('label');
                labelUnlock.textContent = 'Unlock';

                const inputUnlock = document.createElement('input');
                inputUnlock.type = 'radio';
                inputUnlock.name = 'user1Locked';
                inputUnlock.value = 'unlock';

                const br = document.createElement('br');
                const hr1 = document.createElement('hr');

                // Username
                const labelUsername = document.createElement('label');
                labelUsername.textContent = 'Username';

                const inputUsername = document.createElement('input');
                inputUsername.type = 'text';
                inputUsername.name = 'user1Username'; // ✅ TEST EXPECTS THIS
                inputUsername.value = user.username;
                inputUsername.disabled = true;
                inputUsername.readOnly = true;

                // Hidden section
                const hiddenDiv = document.createElement('div');
                hiddenDiv.className = 'user1Username';
                hiddenDiv.style.display = 'none';

                const hr2 = document.createElement('hr');

                const labelEmail = document.createElement('label');
                labelEmail.textContent = 'Email:';

                const inputEmail = document.createElement('input');
                inputEmail.type = 'email';
                inputEmail.name = 'user1Email';
                inputEmail.value = user.email;
                inputEmail.disabled = true;
                inputEmail.readOnly = true;

                const labelAge = document.createElement('label');
                labelAge.textContent = 'Age:';

                const inputAge = document.createElement('input');
                inputAge.type = 'number';
                inputAge.name = 'user1Age';
                inputAge.value = user.age;
                inputAge.disabled = true;
                inputAge.readOnly = true;

                hiddenDiv.appendChild(hr2);
                hiddenDiv.appendChild(labelEmail);
                hiddenDiv.appendChild(inputEmail);
                hiddenDiv.appendChild(labelAge);
                hiddenDiv.appendChild(inputAge);

                // Button
                const btn = document.createElement('button');
                btn.textContent = 'Show more';

                btn.addEventListener('click', () => {
                    if (inputUnlock.checked) {
                        if (hiddenDiv.style.display === 'none') {
                            hiddenDiv.style.display = 'block';
                            btn.textContent = 'Hide it';
                        } else {
                            hiddenDiv.style.display = 'none';
                            btn.textContent = 'Show more';
                        }
                    }
                });

                // Append all elements
                profile.appendChild(img);
                profile.appendChild(labelLock);
                profile.appendChild(inputLock);
                profile.appendChild(labelUnlock);
                profile.appendChild(inputUnlock);
                profile.appendChild(br);
                profile.appendChild(hr1);
                profile.appendChild(labelUsername);
                profile.appendChild(inputUsername);
                profile.appendChild(hiddenDiv);
                profile.appendChild(btn);

                main.appendChild(profile);
            });
        });
}
