const tables = document.querySelectorAll('.table');
    const form = document.getElementById('bookingForm');
    const selectedTablesTextArea = document.getElementById('selectedTables');
    const familyBooked = document.getElementById('familyBooked');
    const coupleBooked = document.getElementById('coupleBooked');
    const slotsBooked = document.getElementById('slotsBooked');
    const totalSlots = document.getElementById('totalSlots');

    let selectedFamilyTable = null;
    let selectedCoupleTable = null;
    let familyBookings = 0;
    let coupleBookings = 0;
    let totalBookings = 0;

    // Function to handle table selection
    tables.forEach(table => {
        table.addEventListener('click', () => {
            const sector = table.dataset.sector;
            const tableNum = table.dataset.table;

            // Reset the background color of all tables in the sector
            document.querySelectorAll(`.table[data-sector="${sector}"]`).forEach(t => t.classList.remove('selected'));

            // Mark the selected table with a highlighted color
            table.classList.add('selected');

            // Handle selection logic based on the sector
            if (sector === 'family' && selectedFamilyTable !== tableNum) {
                selectedFamilyTable = tableNum;
            } else if (sector === 'couple' && selectedCoupleTable !== tableNum) {
                selectedCoupleTable = tableNum;
            }

            // Update the text area with selected tables
            updateSelectedTablesTextArea();
        });
    });

    // Function to update the text area with selected tables
    function updateSelectedTablesTextArea() {
        let selectionText = '';
        if (selectedFamilyTable) {
            selectionText += `Family Tables - Table ${selectedFamilyTable}\n`;
        }
        if (selectedCoupleTable) {
            selectionText += `Couple Tables - Table ${selectedCoupleTable}\n`;
        }
        selectedTablesTextArea.value = selectionText;
    }

    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (selectedFamilyTable) {
            familyBookings++;
            familyBooked.textContent = familyBookings;
        }

        if (selectedCoupleTable) {
            coupleBookings++;
            coupleBooked.textContent = coupleBookings;
        }

        totalBookings = familyBookings + coupleBookings;
        slotsBooked.textContent = totalBookings;

        alert('Your table has been successfully booked!');
        form.reset();
        selectedTablesTextArea.value = '';
    });