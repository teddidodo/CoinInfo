from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.types import Float, Integer, Text
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql.expression import text
from sqlalchemy.sql.sqltypes import TIMESTAMP
from database import Base
from sqlalchemy.orm import relationship

class ExchangeRate (Base):
    __tablename__ = "ExchangeRate"
    id = Column(UUID(as_uuid=True), primary_key=True, nullable=True, server_default='uuid_generate_v4()')
    created_at = Column(TIMESTAMP(timezone=True), nullable=True, server_default=text('now()'))
    coin = Column(Text())
    rate = Column(Float())