// Stein, Saks, Papir spill

function spillSteinSaksPapir() {
    // Brukerens valg
    let brukerValg = prompt('Skriv inn ditt valg (stein, saks, eller papir):').toLowerCase();
    
    // Sjekk om brukeren skrev inn gyldig valg
    if (!['stein', 'saks', 'papir'].includes(brukerValg)) {
        alert('Ugyldig valg! Vennligst velg stein, saks, eller papir.');
        return;
    }
    
    // Datamaskinens valg
    const valg = ['stein', 'saks', 'papir'];
    const datamaskinValg = valg[Math.floor(Math.random() * 3)];
    
    // Vis valgene
    alert(`Du valgte: ${brukerValg}\nDatamaskinen valgte: ${datamaskinValg}`);
    
    // Bestem vinneren
    if (brukerValg === datamaskinValg) {
        alert('Uavgjort!');
    } else if (
        (brukerValg === 'stein' && datamaskinValg === 'saks') ||
        (brukerValg === 'saks' && datamaskinValg === 'papir') ||
        (brukerValg === 'papir' && datamaskinValg === 'stein')
    ) {
        alert('Gratulerer! Du vant! 🎉');
    } else {
        alert('Beklager, du tapte! Prøv igjen! 😢');
    }
}

// Start spillet
spillSteinSaksPapir();
