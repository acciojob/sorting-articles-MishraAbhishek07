//your JS code here. If required.
 const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 
                      'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 
                      'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 
                      'An Old Dog'];

        // Words to ignore while sorting
        const ignoreWords = ["a", "an", "the"];

        // Function to sort band names
        function sortBands(bands) {
            return bands.sort((a, b) => {
                const bandA = a.split(' ').filter(word => !ignoreWords.includes(word.toLowerCase())).join(' ');
                const bandB = b.split(' ').filter(word => !ignoreWords.includes(word.toLowerCase())).join(' ');

                return bandA.localeCompare(bandB);
            });
        }

        // Display sorted bands in the unordered list
        function displaySortedBands() {
            const sortedBands = sortBands(bands);
            const bandList = document.getElementById('band');
            
            sortedBands.forEach(band => {
                const li = document.createElement('li');
                li.textContent = band;
                bandList.appendChild(li);
            });
        }

        // Call the function to display the sorted bands
        displaySortedBands();