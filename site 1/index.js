const members = [
    { name: 'Peter Quill', id: 'peter' },
    { name: 'Gamora Titan', id: 'gamora' },
    { name: 'Drax o Destruidor', id: 'drax' },
    { name: 'Mantis', id: 'mantis' },
    { name: 'Rocket Raccoon', id: 'rocket' },
    { name: 'I am Groot', id: 'groot' },
  ]

  let activeMember = 0
  const images = document.getElementById('images')
  const menu = document.getElementById('menu')
  const navigation = document.getElementById('navigation')
  const membername = document.getElementById('member-name')
function changeStatusButtons() {
    const prev = document.getElementById('button-prev')
    const IsFirst = activeMember === 0
    prev.disabled = IsFirst

    const next = document.getElementById('button-next')
    const IsLast = activeMember === members.length - 1
    next.disabled = IsLast
    
}

function changeMember(memberId){
  activeMember = memberId
  const member = members[activeMember]
    images.style.transform  = `translateY(${-100 * activeMember}vh)`

    membername.classList = member.id
    changeName(member.name)

    changeStatusButtons()
}

  function navigationMember(direction) {
    changeMember(activeMember + direction)
    

    
  }

  function changemenu(){
    menu.classList.toggle('active')
    navigation.classList.toggle('active')
  }

  function setMember(memberId) {
    changeMember(memberId);

  }