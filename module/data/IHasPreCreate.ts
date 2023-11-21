/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

export default interface IHasPreCreate<DocumentType extends foundry.abstract.Document> {
	preCreate?(document: DocumentType, data: PreDocumentId<any>, options: DocumentModificationContext<DocumentType>, user: foundry.documents.BaseUser): Promise<void>;
}
