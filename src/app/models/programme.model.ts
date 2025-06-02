export interface Programme {
  id?: number;
  nom: string;
  type: string;  // Surveillance, Réclamation, etc.
  dateCreation: string; // Format: YYYY-MM-DD
}
