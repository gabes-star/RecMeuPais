function calendarioAnual(anos) {
    if (anos % 4 === 0) {
        if (anos % 100 === 0) {
            if (anos % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

console.log(calendarioAnual(2589))