export default function convertHourToMinutes(time: string) {
  // Vai separar hora de minutos 8 ':' 00 em um array
  // Na posição 0 ficam as horas e 1 minutos
  // Depois, fazemos um map convertendo cada um desses items em números
  const [hour, minutes] = time.split(':').map(Number);
  const timeInMinutes = hour * 60 + minutes;
  return timeInMinutes;
}
