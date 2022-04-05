const modalWrapper = document.querySelector('#modal')

document.addEventListener('keydown', closeModal)

function closeModal(event){
  if(event.key == 'Escape' && !modal.classList.contains('invisible')){
    modalWrapper.classList.toggle('invisible')
  }
}

document.querySelector('#openModal').addEventListener('click', openModal)

function openModal(){
  modalWrapper.classList.toggle('invisible')
}