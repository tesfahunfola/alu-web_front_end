const roomDimensions = {
    length: 100,
    width: 50,
    getArea: function() {
        return this.length * this.width;
    }
}

const boundGetArea =  roomDimensions.getArea.bind(roomDimensions)