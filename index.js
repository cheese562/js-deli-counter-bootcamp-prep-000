var katzDeliLine = [];

function takeANumber(katzDeliLine, name)
{
  katzDeliLine.push(`${name}`)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine)
{
  if (katzDeliLine.length === 0)
  {
    return "There is nobody waiting to be served."
  }
  // return the first person in line and remove them
  else 
  {
    return `Currently serving ${katzDeliLine.shift()}.`
  }  
}

function currentLine(line)
{
  // returns the current line
  if (x === 1)
  {
    
  }
  // return the first person in line and remove them
  else 
  {
   return "The line is currently empty."
  }
}