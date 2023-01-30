export const letTheComputerPlay = () => {
  const compThrow = Math.floor(Math.random()*100)
  if (compThrow < 33) {
    return 'rock'
  }
  if (compThrow < 66) {
    return 'paper'
  }
  return 'scissors'
}
