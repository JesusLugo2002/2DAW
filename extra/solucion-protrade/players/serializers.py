from shared.serializers import BaseSerializer
from teams.serializers import TeamSerializer


class PlayerSerializer(BaseSerializer):
    def serialize_instance(self, instance) -> dict:
        return {
            'id': instance.pk,
            'name': instance.name,
            'slug': instance.slug,
            'position': instance.get_position_display(),
            'birth_date': instance.birth_date.isoformat(),
            'market_value': float(instance.market_value),
            'photo': self.build_url(instance.photo.url),
            'team': TeamSerializer(instance.team, request=self.request).serialize(),
        }
