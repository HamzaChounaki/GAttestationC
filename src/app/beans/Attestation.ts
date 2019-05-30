import { Employe } from './Employe';

export class Attestation{
  constructor(
    public id?: number,
    public dateSortie?: any,
    public numero?: string,
    public employe?: any,
  )
  {
    
  }
}
