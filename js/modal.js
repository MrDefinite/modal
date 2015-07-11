function Modal(modalId) {
    var self = this;
    this.modalDiv = $('#' + modalId);
    this.modalContainer = $('#' + modalId + ' > .modalContainer');
    $('#modalId > .modalContainer > div.footer > a').on('click', function() {
        self.close();
    });
}

Modal.prototype.open = function() {
    this.modalDiv.addClass('modal-show');
    this.modalContainer.addClass('show')
};

Modal.prototype.close = function() {
    this.modalDiv.removeClass('modal-show');
    this.modalContainer.removeClass('show');
    this.modalContainer.addClass('hide');
};

$(document).ready(function() {
    var modal1 = new Modal('modalId');

    $('#openBtn').on('click', function() {
        modal1.open();
    });
});