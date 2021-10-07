const query = () => document.querySelector('');

const addClassX = (e) => {
  if (e.target.classList.contains('activeO')) {
    return alert(" Alguem ja marcou esta casa!");
  }
  e.target.classList.add('activeX');
}