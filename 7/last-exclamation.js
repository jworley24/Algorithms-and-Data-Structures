function remove(s){
  return s.split(' ').filter(i => i.split('!').length != 2).join(' ');
}